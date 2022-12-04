import { EventManagerView } from "../../../views/eventManager/EventManager";
import { Layout } from "../../../views/layout/Layout";

const EventManagerEvents = () => (
    <Layout>
        <EventManagerView activeTab="events" />
    </Layout>
);

export default EventManagerEvents;
