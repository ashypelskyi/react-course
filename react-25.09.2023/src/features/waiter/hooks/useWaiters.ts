import {Waiter, WaitersPageConfig, WaiterSuccessOrError} from "../types";
import {useCallback, useEffect, useState} from "react";
import {WaiterClient} from "../clients/WaiterClient";
import {Variant} from "react-bootstrap/types";

const useWaiters = (config: WaitersPageConfig) => {
    const [waiters, setWaiters] = useState<Waiter[]>([]);
    const [client] = useState<WaiterClient>(() => new WaiterClient(config.backend.url));
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationType, setNotificationType] = useState<Variant>('light');
    const [editableWaiter, setEditableWaiter] = useState<Waiter>();

    const fetchAll = useCallback(() => {
        client.fetchAll().then(waiters => setWaiters(waiters));
    }, [client]);

    useEffect(() => {
        fetchAll();
    }, [fetchAll]);

    const createWaiter = async (waiter: Waiter): Promise<WaiterSuccessOrError> => {
        try {
            const created = await client.create(waiter);
            setWaiters([...waiters, created]);
            setNotificationMessage(`Waiter '${created.firstName}' created`);
            setNotificationType('success');
            return created;
        } catch (e: unknown) {
            setNotificationMessage(`Creation failed: ${e}`);
            setNotificationType('danger');
            return e;
        }
    }

    const editWaiter = async (nextWaiter: Waiter): Promise<WaiterSuccessOrError> => {
        try {
            const updated = await client.update(nextWaiter);
            const nextWaiterList = waiters.map(waiter => waiter.id === nextWaiter.id ? updated : waiter)
            setWaiters(nextWaiterList);
            setNotificationMessage(`Waiter '${updated.firstName}' updated`);
            setNotificationType('success');
            return updated;
        } catch (e: unknown) {
            setNotificationMessage(`Edition failed: ${e}`);
            setNotificationType('danger');
            return e;
        }
    }

    const deleteWaiter = async (waiterId: number): Promise<WaiterSuccessOrError> => {
        try {
            await client.delete(waiterId);
            const index = waiters.findIndex(waiter => waiter.id === waiterId);

            let deleted: Waiter;
            if (index > -1) {
                deleted = waiters[index];
                const nextWaiters = [...waiters];
                nextWaiters.splice(index, 1);
                setWaiters(nextWaiters);
                setNotificationMessage(`Waiter '${deleted.firstName}' deleted`);
                setNotificationType('success');
                return deleted;
            }

            setNotificationMessage(`Waiter with id '${waiterId}' not found`);
            setNotificationType('success');
            return null;
        } catch (e: unknown) {
            setNotificationMessage(`Deletion failed: ${e}`);
            setNotificationType('danger');
            return e;
        }
    }

    return {
        waiters,
        editableWaiter,
        createWaiter,
        editWaiter,
        setEditableWaiter,
        deleteWaiter,
        notificationMessage,
        notificationType
    };
}

export default useWaiters;