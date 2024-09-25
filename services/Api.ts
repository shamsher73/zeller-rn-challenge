import awsconfig from '@/aws-exports';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

export const ApiInit = () => {
    Amplify.configure({
        API: {
            GraphQL: {
                endpoint: awsconfig.aws_appsync_graphqlEndpoint,
                region: awsconfig.aws_appsync_region,
                defaultAuthMode: 'apiKey',
                apiKey: awsconfig.aws_appsync_apiKey
            }
        }
    });
}


export const ApiClient = generateClient();