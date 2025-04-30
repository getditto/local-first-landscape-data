// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'ditto',
	Name: 'Ditto',
	Description: 'Ditto is the only edge-native, mobile database that can consistently support your business anytime, anywhere. Edge-native solutions are built specifically to thrive on mobile and edge devices, without relying solely on cloud-based services.',
	MaturityLevel: "Production-Ready",
	Website: 'https://www.ditto.com',
	GitHub: "https://github.com/getditto",
	GetStarted: 'https://docs.ditto.live/home/introduction#sdk-quickstart-guides',
	Deployment: ['Self-hosted', 'Hosted'],
	License: 'Proprietary',
	AppTarget: {
		Platform: { data: [
		  "Browser",
		  "Node",
		  "iOS",
		  "Android",
		  "macOS",
		  "Linux",
		  "Windows",
		  "WASM"
		], 
		  comment: "The various Ditto Edge SDKs may or may not suppport all environments listed. Other platforms are in development."
		},  
		LanguageSDK: {
			data: [
			  'Swift',
			  'Kotlin - Android',
			  'Java - Server',
			  'Java - Android',
			  'Dart',
			  'React Native',
			  'JavaScript Web',
			  'C# - .NET',
			  'Rust',
			  'C++',
			],   
			comment: ""
		  },
		FrameworkIntegrations: {
      			data: ['React Native', 'Flutter', '.NET Maui'],
    			},
		},
	Networking: {
		Protocol: {
      			data: ['WebSockets', 'HTTPS'],
    		},
		Topology: { data: 'Mesh Network' },
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['Ditto Server', 'MongoDB Atlas'] },
		DataModelParadigm: { data: 'Document' },
	},
	ClientSideData: {
		QueryAPI: { data: ['Async', 'Reactive queries'] },
		PersistenceMechanism: { data: ['Proprietary'] },
		PersistenceFeatures: { data: 'Indexes', 'Transactions' },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support', comment: 'Dynamic query support.' },
		OptimisticUpdates: {
      			data: 'Yes',
    		},
    		OfflineWrites: {
      			data: 'Yes',
    		},
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication', 'Partial Replication'],
					  comment:
        'Defined using [subscriptions](https://docs.ditto.live/key-concepts/syncing-data).  Supports flexible [authorization](https://docs.ditto.live/key-concepts/authentication-and-authorization) model.',},
		ConflictHandling: {
			data: 'Automatic via CRDT',
			comment: 'All changes are recorded and conflicts are resolved automatically'
		  },
		WhereResolutionOccurs: { data: ['Client', 'Server'] },
		WhatGetsSynced: {
			data: { ClientToClient: 'ops', ClientToServer: 'ops', ServerToClient: 'ops' },
			comment: 'There is no distinction between client and server.'
		  },
		  Authority: {
			data: 'Centralized'
		  },
	},
})
