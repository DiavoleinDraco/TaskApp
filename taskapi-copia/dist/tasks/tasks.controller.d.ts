/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/task-schema").Task1> & import("../schemas/task-schema").Task1 & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/task-schema").Task1> & import("../schemas/task-schema").Task1 & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/task-schema").Task1, "find">;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task-schema").Task1> & import("../schemas/task-schema").Task1 & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(body: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task-schema").Task1> & import("../schemas/task-schema").Task1 & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task-schema").Task1> & import("../schemas/task-schema").Task1 & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task-schema").Task1> & import("../schemas/task-schema").Task1 & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
