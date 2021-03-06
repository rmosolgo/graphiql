/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE-examples file in the root directory of this source tree.
 */

import { expect } from 'chai';
import { describe, it } from 'mocha';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';

import { GraphiQL } from '../GraphiQL';


describe('GraphiQL', () => {
  const noOpFetcher = () => {};

  it('should throw error without fetcher', () => {
    expect(() => renderIntoDocument(
      <GraphiQL />
    )).to.throw(
      'GraphiQL requires a fetcher function'
    );
  });

  it('should construct correctly with fetcher', () => {
    expect(() => renderIntoDocument(
      <GraphiQL fetcher={noOpFetcher} />
    )).to.not.throw();
  });

  it('should not throw error if schema missing and query provided', () => {
    expect(() => renderIntoDocument(
      <GraphiQL fetcher={noOpFetcher} query="{}" />
    )).to.not.throw();
  });
});
