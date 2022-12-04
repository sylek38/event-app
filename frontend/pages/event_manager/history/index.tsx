import { EventManagerView } from "../../../views/eventManager/EventManager";
import { Layout } from "../../../views/layout/Layout";

const EventManagerHistory = () => (
    <Layout>
        <EventManagerView activeTab="history" />
    </Layout>
);

export default EventManagerHistory;
