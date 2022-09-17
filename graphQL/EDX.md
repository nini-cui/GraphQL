EDX

Post - 

no more over - and underfetching 

schema serves as contract between client and server

Schema Definition Language (SDL)

```graphQL
type Person {
	name: String!
	age: Int!
	posts: [Post!]!
}
```

```graphQL
type Post {
	title: String!
	author: Person!
}
```

```graphQL
{
	allPersons(last:2) {
		name
		age
	}
}
```

Client <b> makes HTTP request </b> Server

Schema: 

1. what fields can we select
2. what kinds of objects might they return 
3. what fields are available on these sub-objects

GraphQL Schema:

Define a collection of types with fields that are populated from your back-end data stores

Specifies exactly which queries and mutations are available for clients to execute against your data graph



Types that a Schema can include:

Scalar types

Object types: an object type contains a collection of fields, each of which can be either a scalar type or another object type

Query type 

Mutation type

Input type



!: cannot be null

