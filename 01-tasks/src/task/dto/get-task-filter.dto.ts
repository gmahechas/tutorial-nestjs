import { TaskStatus } from "../task.interface";

export class GetTaskFilterDto {
  status: TaskStatus;
  search: string;
}