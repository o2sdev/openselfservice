import React, { useState } from 'react';

import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import CopyIcon from '@site/src/assets/icons/copy.svg';
import TerminalIcon from '@site/src/assets/icons/terminal.svg';

interface CopyCommandButtonProps {
    command: string;
}

export function CopyCommandButton({ command }: CopyCommandButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="flex flex-col gap-4">
            <button
                type="button"
                className="button button-copy w-full font-mono text-base flex items-center px-3 py-2"
                style={{ justifyContent: 'space-between' }}
                onClick={handleCopyClick}
            >
                <TerminalIcon className="h-5 w-5 mr-2 shrink-0" />
                <span className="flex-1 text-left ml-2 mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {command}
                </span>
                <span className="relative ml-2 h-5 w-5 shrink-0">
                    <CopyIcon
                        className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${copied ? 'opacity-0' : 'opacity-100'}`}
                        style={{ pointerEvents: 'none' }}
                    />
                    <CircleCheckIcon
                        className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}
                        style={{ pointerEvents: 'none' }}
                    />
                </span>
            </button>
        </div>
    );
}
