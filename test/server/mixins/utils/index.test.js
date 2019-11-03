'use strict'

const { expect } = require('chai')
const utils = require('../../../../server/mixins/utils')

describe('Utility Functions', () => {
  describe('#updateTimestamps()', () => {
    it('should update `updatedAt` on an request', (done) => {
      const context = {
        data: {},
      }
      utils.updateTimestamps(context, () => {
        expect(context.data.updatedAt).to.be.an.instanceof(Date)
        done()
      })
    })
    
  })
})