import {
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { describe, expect, it } from 'vitest';

import { handleHttpError } from './handle-http-error';

describe('handleHttpError', () => {
    it('should throw NotFoundException when error.status is 404', () => {
        expect(() => handleHttpError({ status: 404 })).toThrow(NotFoundException);
        expect(() => handleHttpError({ status: 404 })).toThrow('Not found');
    });

    it('should throw ForbiddenException when error.status is 403', () => {
        expect(() => handleHttpError({ status: 403 })).toThrow(ForbiddenException);
        expect(() => handleHttpError({ status: 403 })).toThrow('Forbidden');
    });

    it('should throw UnauthorizedException when error.status is 401', () => {
        expect(() => handleHttpError({ status: 401 })).toThrow(UnauthorizedException);
        expect(() => handleHttpError({ status: 401 })).toThrow('Unauthorized');
    });

    it('should return observable that errors with InternalServerErrorException for other status', async () => {
        const obs = handleHttpError({ status: 500, message: 'Server error' });

        await expect(firstValueFrom(obs)).rejects.toThrow(InternalServerErrorException);
        await expect(firstValueFrom(handleHttpError({ status: 500, message: 'Server error' }))).rejects.toThrow(
            'Server error',
        );
    });
});
