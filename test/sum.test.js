import { expect } from 'chai'
import sum from '../src/sum'

it( '1 + 2 should be 3', function() {
	expect( sum( 1, 2 ) ).to.equal( 3 )
} )
