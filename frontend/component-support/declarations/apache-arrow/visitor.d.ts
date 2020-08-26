export declare abstract class Visitor {
  visitMany(nodes: any[], ...args: any[][]): any[]
  visit(...args: any[]): any
  getVisitFn(node: any, throwIfNotFound?: boolean): any
}
export interface Visitor {
  visitNull(node: any, ...args: any[]): any
  visitBool(node: any, ...args: any[]): any
  visitInt(node: any, ...args: any[]): any
  visitInt8?(node: any, ...args: any[]): any
  visitInt16?(node: any, ...args: any[]): any
  visitInt32?(node: any, ...args: any[]): any
  visitInt64?(node: any, ...args: any[]): any
  visitUint8?(node: any, ...args: any[]): any
  visitUint16?(node: any, ...args: any[]): any
  visitUint32?(node: any, ...args: any[]): any
  visitUint64?(node: any, ...args: any[]): any
  visitFloat(node: any, ...args: any[]): any
  visitFloat16?(node: any, ...args: any[]): any
  visitFloat32?(node: any, ...args: any[]): any
  visitFloat64?(node: any, ...args: any[]): any
  visitUtf8(node: any, ...args: any[]): any
  visitBinary(node: any, ...args: any[]): any
  visitFixedSizeBinary(node: any, ...args: any[]): any
  visitDate(node: any, ...args: any[]): any
  visitDateDay?(node: any, ...args: any[]): any
  visitDateMillisecond?(node: any, ...args: any[]): any
  visitTimestamp(node: any, ...args: any[]): any
  visitTimestampSecond?(node: any, ...args: any[]): any
  visitTimestampMillisecond?(node: any, ...args: any[]): any
  visitTimestampMicrosecond?(node: any, ...args: any[]): any
  visitTimestampNanosecond?(node: any, ...args: any[]): any
  visitTime(node: any, ...args: any[]): any
  visitTimeSecond?(node: any, ...args: any[]): any
  visitTimeMillisecond?(node: any, ...args: any[]): any
  visitTimeMicrosecond?(node: any, ...args: any[]): any
  visitTimeNanosecond?(node: any, ...args: any[]): any
  visitDecimal(node: any, ...args: any[]): any
  visitList(node: any, ...args: any[]): any
  visitStruct(node: any, ...args: any[]): any
  visitUnion(node: any, ...args: any[]): any
  visitDenseUnion?(node: any, ...args: any[]): any
  visitSparseUnion?(node: any, ...args: any[]): any
  visitDictionary(node: any, ...args: any[]): any
  visitInterval(node: any, ...args: any[]): any
  visitIntervalDayTime?(node: any, ...args: any[]): any
  visitIntervalYearMonth?(node: any, ...args: any[]): any
  visitFixedSizeList(node: any, ...args: any[]): any
  visitMap(node: any, ...args: any[]): any
}