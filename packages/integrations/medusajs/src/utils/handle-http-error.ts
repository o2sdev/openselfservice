import {
    BadRequestException,
    ForbiddenException,
    HttpException,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { throwError } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleHttpError = (error: any) => {
    if (error instanceof HttpException) {
        return throwError(() => error);
    }
    if (error.status === 404) {
        throw new NotFoundException(`Not found`);
    } else if (error.status === 403) {
        throw new ForbiddenException('Forbidden');
    } else if (error.status === 401) {
        throw new UnauthorizedException('Unauthorized');
    } else if (error.status === 400) {
        return throwError(() => new BadRequestException(error.message || error.data?.message || 'Bad request'));
    }
    return throwError(() => new InternalServerErrorException(error.message));
};
