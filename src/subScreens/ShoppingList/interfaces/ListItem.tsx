/**
 * Interface representing an item on a Shopping List
 */
export interface ListItem {
  name      : string,
  subtype   : string
  quantity  : number, 
  cost      : number, 
  note      : string[]
  // image     : string
}