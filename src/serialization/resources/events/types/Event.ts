/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const Event: core.serialization.Schema<serializers.Event.Raw, Flatfile.Event> = core.serialization
    .union("type", {
        "space:added": core.serialization.lazyObject(async () => (await import("../../..")).SpaceAddedEvent),
        "space:removed": core.serialization.lazyObject(async () => (await import("../../..")).SpaceRemovedEvent),
        "workbook:added": core.serialization.lazyObject(async () => (await import("../../..")).WorkbookAddedEvent),
        "workbook:removed": core.serialization.lazyObject(async () => (await import("../../..")).WorkbookRemovedEvent),
        "user:added": core.serialization.lazyObject(async () => (await import("../../..")).UserAddedEvent),
        "user:removed": core.serialization.lazyObject(async () => (await import("../../..")).UserRemovedEvent),
        "user:online": core.serialization.lazyObject(async () => (await import("../../..")).UserOnlineEvent),
        "user:offline": core.serialization.lazyObject(async () => (await import("../../..")).UserOfflineEvent),
        "upload:started": core.serialization.lazyObject(async () => (await import("../../..")).UploadStartedEvent),
        "upload:failed": core.serialization.lazyObject(async () => (await import("../../..")).UploadFailedEvent),
        "upload:completed": core.serialization.lazyObject(async () => (await import("../../..")).UploadCompletedEvent),
        "job:started": core.serialization.lazyObject(async () => (await import("../../..")).JobStartedEvent),
        "job:waiting": core.serialization.lazyObject(async () => (await import("../../..")).JobWaitingEvent),
        "job:updated": core.serialization.lazyObject(async () => (await import("../../..")).JobUpdatedEvent),
        "job:failed": core.serialization.lazyObject(async () => (await import("../../..")).JobFailedEvent),
        job_completed: core.serialization.lazyObject(async () => (await import("../../..")).JobCompletedEvent),
        "job:deleted": core.serialization.lazyObject(async () => (await import("../../..")).JobDeletedEvent),
        "records:created": core.serialization.lazyObject(async () => (await import("../../..")).RecordsCreatedEvent),
        "records:updated": core.serialization.lazyObject(async () => (await import("../../..")).RecordsUpdatedEvent),
        "records:deleted": core.serialization.lazyObject(async () => (await import("../../..")).RecordsDeletedEvent),
        "sheet:validated": core.serialization.lazyObject(async () => (await import("../../..")).SheetValidatedEvent),
        "action:triggered": core.serialization.lazyObject(async () => (await import("../../..")).ActionTriggeredEvent),
        "file:deleted": core.serialization.lazyObject(async () => (await import("../../..")).FileDeletedEvent),
    })
    .transform<Flatfile.Event>({
        transform: (value) => {
            switch (value.type) {
                case "space:added":
                    return Flatfile.Event.spaceAdded(value);
                case "space:removed":
                    return Flatfile.Event.spaceRemoved(value);
                case "workbook:added":
                    return Flatfile.Event.workbookAdded(value);
                case "workbook:removed":
                    return Flatfile.Event.workbookRemoved(value);
                case "user:added":
                    return Flatfile.Event.userAdded(value);
                case "user:removed":
                    return Flatfile.Event.userRemoved(value);
                case "user:online":
                    return Flatfile.Event.userOnline(value);
                case "user:offline":
                    return Flatfile.Event.userOffline(value);
                case "upload:started":
                    return Flatfile.Event.uploadStarted(value);
                case "upload:failed":
                    return Flatfile.Event.uploadFailed(value);
                case "upload:completed":
                    return Flatfile.Event.uploadCompleted(value);
                case "job:started":
                    return Flatfile.Event.jobStarted(value);
                case "job:waiting":
                    return Flatfile.Event.jobWaiting(value);
                case "job:updated":
                    return Flatfile.Event.jobUpdated(value);
                case "job:failed":
                    return Flatfile.Event.jobFailed(value);
                case "job_completed":
                    return Flatfile.Event.jobCompleted(value);
                case "job:deleted":
                    return Flatfile.Event.jobDeleted(value);
                case "records:created":
                    return Flatfile.Event.recordsCreated(value);
                case "records:updated":
                    return Flatfile.Event.recordsUpdated(value);
                case "records:deleted":
                    return Flatfile.Event.recordsDeleted(value);
                case "sheet:validated":
                    return Flatfile.Event.sheetValidated(value);
                case "action:triggered":
                    return Flatfile.Event.actionTriggered(value);
                case "file:deleted":
                    return Flatfile.Event.fileDeleted(value);
                default:
                    return Flatfile.Event._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Event {
    type Raw =
        | Event.SpaceAdded
        | Event.SpaceRemoved
        | Event.WorkbookAdded
        | Event.WorkbookRemoved
        | Event.UserAdded
        | Event.UserRemoved
        | Event.UserOnline
        | Event.UserOffline
        | Event.UploadStarted
        | Event.UploadFailed
        | Event.UploadCompleted
        | Event.JobStarted
        | Event.JobWaiting
        | Event.JobUpdated
        | Event.JobFailed
        | Event.JobCompleted
        | Event.JobDeleted
        | Event.RecordsCreated
        | Event.RecordsUpdated
        | Event.RecordsDeleted
        | Event.SheetValidated
        | Event.ActionTriggered
        | Event.FileDeleted;

    interface SpaceAdded extends serializers.SpaceAddedEvent.Raw {
        type: "space:added";
    }

    interface SpaceRemoved extends serializers.SpaceRemovedEvent.Raw {
        type: "space:removed";
    }

    interface WorkbookAdded extends serializers.WorkbookAddedEvent.Raw {
        type: "workbook:added";
    }

    interface WorkbookRemoved extends serializers.WorkbookRemovedEvent.Raw {
        type: "workbook:removed";
    }

    interface UserAdded extends serializers.UserAddedEvent.Raw {
        type: "user:added";
    }

    interface UserRemoved extends serializers.UserRemovedEvent.Raw {
        type: "user:removed";
    }

    interface UserOnline extends serializers.UserOnlineEvent.Raw {
        type: "user:online";
    }

    interface UserOffline extends serializers.UserOfflineEvent.Raw {
        type: "user:offline";
    }

    interface UploadStarted extends serializers.UploadStartedEvent.Raw {
        type: "upload:started";
    }

    interface UploadFailed extends serializers.UploadFailedEvent.Raw {
        type: "upload:failed";
    }

    interface UploadCompleted extends serializers.UploadCompletedEvent.Raw {
        type: "upload:completed";
    }

    interface JobStarted extends serializers.JobStartedEvent.Raw {
        type: "job:started";
    }

    interface JobWaiting extends serializers.JobWaitingEvent.Raw {
        type: "job:waiting";
    }

    interface JobUpdated extends serializers.JobUpdatedEvent.Raw {
        type: "job:updated";
    }

    interface JobFailed extends serializers.JobFailedEvent.Raw {
        type: "job:failed";
    }

    interface JobCompleted extends serializers.JobCompletedEvent.Raw {
        type: "job_completed";
    }

    interface JobDeleted extends serializers.JobDeletedEvent.Raw {
        type: "job:deleted";
    }

    interface RecordsCreated extends serializers.RecordsCreatedEvent.Raw {
        type: "records:created";
    }

    interface RecordsUpdated extends serializers.RecordsUpdatedEvent.Raw {
        type: "records:updated";
    }

    interface RecordsDeleted extends serializers.RecordsDeletedEvent.Raw {
        type: "records:deleted";
    }

    interface SheetValidated extends serializers.SheetValidatedEvent.Raw {
        type: "sheet:validated";
    }

    interface ActionTriggered extends serializers.ActionTriggeredEvent.Raw {
        type: "action:triggered";
    }

    interface FileDeleted extends serializers.FileDeletedEvent.Raw {
        type: "file:deleted";
    }
}
