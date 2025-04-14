import { Field, FieldProps, Form, Formik } from 'formik';
import { useSession } from 'next-auth/react';
import { object as YupObject, string as YupString } from 'yup';

import { Button } from '@o2s/ui/components/button';
import { Label } from '@o2s/ui/components/label';
import { RadioGroup, RadioGroupItem } from '@o2s/ui/components/radio-group';
import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@o2s/ui/components/sheet';
import { Typography } from '@o2s/ui/components/typography';

import { useGlobalContext } from '@/providers/GlobalProvider';

import { ContentProps, ContextSwitcherFormValues } from './Content.types';

export const Content = ({ data }: ContentProps) => {
    const session = useSession();

    const { spinner } = useGlobalContext();

    const initialValues = {
        customer: session.data?.user?.customer?.id,
    };

    const validationSchema = YupObject().shape({
        customer: YupString().required(),
    });

    const onSubmit = async (values: ContextSwitcherFormValues) => {
        const customer = data.items.find((item) => item.id === values.customer);
        if (!customer) {
            return;
        }

        spinner.toggle(true);
        await session.update({
            customer,
        });

        window.location.reload();
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
