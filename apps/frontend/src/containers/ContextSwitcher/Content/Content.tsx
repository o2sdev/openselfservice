import { Modules } from '@o2s/api-harmonization';
import { FieldProps, Form, Formik } from 'formik';
import { Field } from 'formik';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Models } from '@o2s/framework/modules';

import { Button } from '@o2s/ui/components/button';
import { Label } from '@o2s/ui/components/label';
import { RadioGroup, RadioGroupItem } from '@o2s/ui/components/radio-group';
import { SheetFooter } from '@o2s/ui/components/sheet';
import { SheetDescription } from '@o2s/ui/components/sheet';
import { SheetHeader, SheetTitle } from '@o2s/ui/components/sheet';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { useGlobalContext } from '@/providers/GlobalProvider';

import { Loading } from '@/components/Loading/Loading';

import { ContentProps, ContextSwitcherFormValues } from './Content.types';

export const Content = ({ labels }: ContentProps) => {
    const { spinner } = useGlobalContext();
    const session = useSession();
    const locale = useLocale();
    const [customers, setCustomers] = useState<Models.Customer.Customer[] | null>(null);
    const initialValues = {
        customer: session.data?.user?.customer?.id,
    };

    const getCustomers = (organizations: Modules.Organizations.Model.OrganizationList) => {
        return organizations.items
            .map((organization) => organization.customers)
            .reduce((acc, curr) => [...acc, ...curr], []);
    };

    useEffect(() => {
        const getOrganizations = async () => {
            const organizationList = await sdk.modules.getOrganizations(
                { limit: 1, offset: 0 },
                { 'x-locale': locale },
                session.data?.accessToken || '',
            );
            setCustomers(getCustomers(organizationList));
        };

        getOrganizations();
    }, [locale, session.data?.accessToken]);

    const validationSchema = YupObject().shape({
        customer: YupString().required(),
    });

    const onSubmit = async (values: ContextSwitcherFormValues) => {
        const customer = customers?.find((item) => item.id === values.customer);
        if (!customer) {
            return;
        }
        spinner.setShow(true);
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
                        <h2>{labels.label}</h2>
                    </Typography>
                </SheetTitle>
                <SheetDescription>{labels.description}</SheetDescription>
            </SheetHeader>
            {customers ? (
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
                                    onValueChange={(value) => {
                                        setFieldValue('customer', value);
                                    }}
                                >
                                    {customers.map((item) => (
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
                                                            <Typography
                                                                variant="small"
                                                                className="text-muted-foreground"
                                                            >
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
                                    {labels.apply}
                                </Button>
                            </SheetFooter>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Loading bars={10} />
            )}
        </div>
    );
};
