import { Field, FieldProps, Form, Formik } from 'formik';
import { useSession } from 'next-auth/react';
import { object as YupObject, string as YupString } from 'yup';

import { toast } from '@o2s/ui/hooks/use-toast';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Button } from '@o2s/ui/elements/button';
import { Label } from '@o2s/ui/elements/label';
import { RadioGroup, RadioGroupItem } from '@o2s/ui/elements/radio-group';
import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@o2s/ui/elements/sheet';
import { Typography } from '@o2s/ui/elements/typography';

import { updateOrganization } from '@/auth';

import { ContentProps, ContextSwitcherFormValues } from './Content.types';

export const Content = ({ data }: ContentProps) => {
    const session = useSession();

    const { spinner, labels } = useGlobalContext();

    const initialValues = {
        customer: session.data?.user?.customer?.id,
    };

    const validationSchema = YupObject().shape({
        customer: YupString().required(),
    });

    const onSubmit = async (values: ContextSwitcherFormValues) => {
        spinner.toggle(true);

        try {
            const customer = data.items.find((item) => item.id === values.customer);
            if (!customer) {
                throw new Error('No customer found');
            }

            await updateOrganization(session, customer);
        } catch (error) {
            console.error('Failed to update organization:', error);

            toast({
                variant: 'destructive',
                title: labels.errors.requestError.title,
                description: labels.errors.requestError.content,
            });
        } finally {
            spinner.toggle(false);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <SheetHeader>
                <SheetTitle asChild>
                    <Typography variant="h2" asChild>
                        <h2>{data.title}</h2>
                    </Typography>
                </SheetTitle>
                <SheetDescription>{data.description}</SheetDescription>
            </SheetHeader>

            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={validationSchema}
            >
                {({ setFieldValue, isValid }) => (
                    <Form>
                        <div className="grid gap-4 pb-6">
                            <RadioGroup
                                className="flex flex-col gap-4"
                                defaultValue={initialValues.customer}
                                onValueChange={async (value) => {
                                    await setFieldValue('customer', value);
                                }}
                            >
                                {data.items.map((item) => (
                                    <Field
                                        name="customer"
                                        type="radio"
                                        value={item.id}
                                        validateOnChange={true}
                                        key={item.id}
                                    >
                                        {({ field }: FieldProps<string, ContextSwitcherFormValues>) => {
                                            return (
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value={field.value} id={item.id} />
                                                    <Label htmlFor={item.id} className="flex flex-col gap-1">
                                                        <Typography variant="body">{item.name}</Typography>
                                                        <Typography variant="small" className="text-muted-foreground">
                                                            {`${item.address?.country}, ${item.address?.city}, ${item.address?.district} - (${item.id})`}
                                                        </Typography>
                                                    </Label>
                                                </div>
                                            );
                                        }}
                                    </Field>
                                ))}
                            </RadioGroup>
                        </div>
                        <SheetFooter>
                            <Button type="submit" disabled={!isValid}>
                                {data.labels.apply}
                            </Button>
                        </SheetFooter>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
