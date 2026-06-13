import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMariadbPrivatelinkresources implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Mariadb Privatelinkresources',
                name: 'N8nDevAzureMariadbPrivatelinkresources',
                icon: { light: 'file:./azure-mariadb-privatelinkresources.png', dark: 'file:./azure-mariadb-privatelinkresources.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure management API enables CRUD operations for MariaDB servers, databases, firewall rules, VNET rules, and security policies.',
                defaults: { name: 'Azure Mariadb Privatelinkresources' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMariadbPrivatelinkresourcesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
