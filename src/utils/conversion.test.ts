import { bytesToMB } from './conversion';

describe('bytesToMB', () => {
  it('should convert bytes to MB', () => {
    expect(bytesToMB(1024)).toEqual('0.0');
    expect(bytesToMB(2048)).toEqual('0.0');
    expect(bytesToMB(1048576)).toEqual('1.0');
    expect(bytesToMB(2097152)).toEqual('2.0');
  });
});
