import { PaginationType } from "../pagination.type";
import { RequestType } from "../requests.type";

export interface RequestsResponse extends PaginationType {
    results: RequestType[];
}
