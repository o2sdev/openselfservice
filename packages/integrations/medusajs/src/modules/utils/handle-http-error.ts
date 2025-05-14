import { NotFoundException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { throwError } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleHttpError = (error: any) => {
    if (error.status === 404) {
        throw new NotFoundException(`Not found`);
    } else if (error.status === 403) {
        throw new ForbiddenException('Forbidden');
    } else if (error.status === 401) {
        throw new UnauthorizedException('Unauthorized');
    }
    return throwError(() => new InternalServerErrorException(error.message));
};
