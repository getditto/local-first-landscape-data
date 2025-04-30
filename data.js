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
			  'Flutter',
			  'React Native',
			  'JavaScript Web',
			  'C# - .NET',
			  'Rust',
			  'C++',
			],   
			comment: ""
		  },
		},
	Networking: {
		Topology: { data: 'Mesh Network' },
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['N/A'] },
		DataModelParadigm: { data: 'Document' },
	},
	ClientSideData: {
		QueryAPI: { data: ['Async'] },
		PersistenceMechanism: { data: [] },
		PersistenceFeatures: { data: 'Indexes' },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: { data: 'Up to 5-10 MB per document' },
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication'] },
		ConflictHandling: {
			data: 'Automatic via CRDT',
			comment: 'All changes are recorded and conflicts are resolved automatically'
		  },
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: { ClientToClient: 'ops', ClientToServer: 'ops', ServerToClient: 'ops' },
			comment: 'There is no distinction between client and server.'
		  },
		  Authority: {
			data: 'Decentralized'
		  },
	},
})
