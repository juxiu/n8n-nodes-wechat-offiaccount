import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { IResource, ResourceOperations } from '../type/IResource';
declare class ResourceBuilder {
    resources: IResource[];
    addResource(resource: INodePropertyOptions): void;
    addOperate(resourceName: string, operate: ResourceOperations): void;
    build(): INodeProperties[];
    getCall(resourceName: string, operateName: string): Function | null;
}
export default ResourceBuilder;
