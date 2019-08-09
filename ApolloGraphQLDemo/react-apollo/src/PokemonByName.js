import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_POKEMON = gql`
query pokemon($name: String!)  {
  pokemon(name: $name) {
    id
    number
    name
  }
}
`
export default ({ name }) => (
  <Query query={GET_POKEMON} variables={{ name }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      if(!!data.pokemon){
        return (
          <div>
            {data.pokemon.name} {data.pokemon.number}
          </div>
        );
      }
      return (
        <div>
          {name} not Found
        </div>
      );
    }}
  </Query>
);