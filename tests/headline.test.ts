import {describe, expect, test} from '@jest/globals';
import headline from '../src/headline';

describe('headline tests', () => {
  test('headlines a string', () => {
    expect(headline('hello world')).toBe('Hello World');
    expect(headline('hello-world')).toBe('Hello World');
    expect(headline('hello_world')).toBe('Hello World');
    expect(headline('helloWorld')).toBe('Hello World');
    expect(headline('HelloWorld')).toBe('Hello World');
    expect(headline('Hello World')).toBe('Hello World');
    expect(headline('hELLOwORLD')).toBe('Hello World');
    expect(headline('hello')).toBe('Hello');
  });


  test('handles numbers at the start of strings', () => {
    expect(headline('42 hello world')).toBe('42 Hello World');
    expect(headline('42-hello-world')).toBe('42 Hello World');
    expect(headline('42 Hello World')).toBe('42 Hello World');
    expect(headline('42_Hello_World')).toBe('42 Hello World');
    expect(headline('42HelloWorld')).toBe('42 Hello World');
  });

  test('handles numbers in the middle of strings', () => {
    expect(headline('hello 42 world')).toBe('Hello 42 World');
    expect(headline('hello-42-world')).toBe('Hello 42 World');
    expect(headline('Hello 42 World')).toBe('Hello 42 World');
    expect(headline('Hello_42_World')).toBe('Hello 42 World');
    expect(headline('hello42world')).toBe('Hello 42 World');
  });

  test('handles numbers at the end of strings', () => {
    expect(headline('hello world 42')).toBe('Hello World 42');
    expect(headline('hello-world-42')).toBe('Hello World 42');
    expect(headline('Hello World 42')).toBe('Hello World 42');
    expect(headline('Hello_World_42')).toBe('Hello World 42');
  });
})