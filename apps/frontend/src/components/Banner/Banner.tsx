import { AlertCircle, CircleCheckBig, Info } from 'lucide-react';
import NextLink from 'next/link';
import React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@o2s/ui/components/alert';
import { Button } from '@o2s/ui/components/button';
import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { BannerContentProps, BannerProps } from './Banner.types';

const ICON_MAP = {
    destructive: AlertCircle,
    positive: CircleCheckBig,
    default: Info,
} as const;

const BUTTON_VARIANT_MAP = {
    destructive: 'destructive',
    positive: 'default',
    default: 'secondary',
} as const;

const LINK_VARIANT_MAP = {
    destructive: 'destructiveButton',
    positive: 'primaryButton',
    default: 'secondaryButton',
} as const;

const BannerContent: React.FC<BannerContentProps> = ({ title, description, showIcon, variant }) => {
    const Icon = ICON_MAP[variant || 'default'];
    const iconStyles = 'size-6';

    return (
        <>
            {showIcon && <Icon className={iconStyles} />}
            {title && (
                <AlertTitle>
                    <Typography variant="small" className="font-bold">
                        {title}
                    </Typography>
                </AlertTitle>
            )}
            {description && (
                <AlertDescription>
                    <Typography variant="small" className="mt-1">
                        {description}
                    </Typography>
                </AlertDescription>
            )}
        </>
    );
};

BannerContent.displayName = 'BannerContent';

export const Banner: React.FC<Readonly<BannerProps>> = ({
    title,
    description,
    variant = 'default',
    button,
    mobileLayout = false,
    showIcon = true,
}) => {
    if (!title && !description) {
        return null;
    }

    const buttonStyles = cn(mobileLayout ? 'w-full' : 'w-full md:w-auto');

    const content = <BannerContent title={title} description={description} showIcon={showIcon} variant={variant} />;

    return (
        <Alert variant={variant} className="p-6 [&_svg~*]:pl-8 [&_svg]:left-6 [&_svg]:top-6 text-foreground">
            {button ? (
                <div
                    className={cn(
                        'flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4 w-full',
                        mobileLayout && 'md:flex-col md:items-start',
                    )}
                >
                    <div>{content}</div>
                    <div className={buttonStyles}>
                        {button.url ? (
                            <Link asChild variant={LINK_VARIANT_MAP[variant]} className={buttonStyles}>
                                <NextLink href={button.url}>{button.label}</NextLink>
                            </Link>
                        ) : (
                            <Button
                                variant={BUTTON_VARIANT_MAP[variant]}
                                onClick={button.onClick}
                                className={buttonStyles}
                            >
                                {button.label}
                            </Button>
                        )}
                    </div>
                </div>
            ) : (
                content
            )}
        </Alert>
    );
};

Banner.displayName = 'Banner';
