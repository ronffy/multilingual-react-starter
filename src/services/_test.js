/**
 * test测试、demo，不会到生产
 * @author ronffy
 */
import request from '../utils/request';
import { apis } from '../utils/config';


export function query() {
  return request(apis._test);
}
