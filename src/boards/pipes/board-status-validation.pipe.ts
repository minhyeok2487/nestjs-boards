import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions: BoardStatus[] = [
    BoardStatus.PUBLIC,
    BoardStatus.PRIVATE,
  ];

  transform(value: string): BoardStatus {
    const upperValue = value.toUpperCase() as BoardStatus;

    if (!this.isStatusValid(upperValue)) {
      throw new BadRequestException(`${value} isn't a valid status`);
    }
    return upperValue;
  }

  private isStatusValid(value: BoardStatus): boolean {
    return this.StatusOptions.includes(value);
  }
}
