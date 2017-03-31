let assert = require('assert');
import {
    versionCompare
} from './../src/index';


describe('测试版本号比较', () => {
    it('text 1.1 1.2', () => {
        let v1 = '1.1',
            v2 = '1.2';
        assert.equal(false, versionCompare(v1, v2));
    });
});