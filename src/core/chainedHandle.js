import UriHandle from './uriHandle';
import PrioritySet from '';
export default class ChainedHandle extends UriHandle {
    constructor(childHandle) {
        this.childHandle = childHandle || [];
    }
}
