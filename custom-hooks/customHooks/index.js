/**
 * This Folder contains customHooks that can be reused for performing some
 * logics that are repeating redundantly and if handled in a wrong manner can
 * lead to memory leakage, performance issues and wrong exception handling
 */

import { useTimeInterval, useTimeOut } from './timeIntervalHooks';
import useGetQuery from './useGetQuery';
import usePostQuery from './usePostQuery';

export { useTimeInterval as setInterval, useTimeOut, useGetQuery, usePostQuery };
