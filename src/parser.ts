import { Parser } from './types';

export class ParserImpl implements Parser {
  IsTextSearch(query: string): boolean {
    // Example logic to determine if the query is a text search
    return query.includes('text');
  }

  IsUCS(query: string): boolean {
    // Example logic to determine if the query uses UCS encoding
    return query.startsWith('ucs:');
  }

  IsOnlyQuery(query: string): boolean {
    // Example logic to determine if the query is only a search term
    return !query.includes('&');
  }

  QueryHashToArray(query: string): Array<[string, string]> {
    // Convert query hash into an array of key-value pairs
    return query.split('&').map(param => param.split('=')).filter(([key]) => key.length > 0).map(([key, value]) => [key, decodeURIComponent(value || '')]);
  }
}
