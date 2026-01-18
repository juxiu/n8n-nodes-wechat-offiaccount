import { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
export declare class WechatOfficialAccountResponseNode implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
