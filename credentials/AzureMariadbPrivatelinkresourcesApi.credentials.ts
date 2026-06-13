import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMariadbPrivatelinkresourcesApi implements ICredentialType {
        name = 'N8nDevAzureMariadbPrivatelinkresourcesApi';

        displayName = 'Azure Mariadb Privatelinkresources API';

        icon: Icon = { light: 'file:../nodes/AzureMariadbPrivatelinkresources/azure-mariadb-privatelinkresources.png', dark: 'file:../nodes/AzureMariadbPrivatelinkresources/azure-mariadb-privatelinkresources.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mariadb Privatelinkresources API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
