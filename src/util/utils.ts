/**
 * Checks if an object is empty
 * @param obj
 * @returns
 */
export const isEmpty = (obj: any) => {
   for (let i in obj) return false

   return true
}
