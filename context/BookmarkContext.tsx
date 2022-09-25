import { createContext, ReactNode, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type BookmarkProviderProps = {
  children: ReactNode
}

type BookmarkContext = {
  addBookmarkedJobs: (inputJob: any) => void
  removeBookmarkedJobs: (inputJob: any) => void
  bookmarkedJobs: any
}

const BookmarkContext = createContext({} as BookmarkContext)

export function useBookmarkContext() {
  return useContext(BookmarkContext)
}

export function BookmarkProvider({ children }: BookmarkProviderProps) {
  const [bookmarkedJobs, setBookmarkedJobs] = useLocalStorage<any>(
    "bookmarked-jobs",
    []
  )

  const addBookmarkedJobs = (inputJob: any) => {
    const isNotFoundExistedJobInState = !bookmarkedJobs.find(
      (stateJob) => stateJob?.id === inputJob?.id
    )

    if (isNotFoundExistedJobInState) {
      setBookmarkedJobs([...bookmarkedJobs, inputJob])
    }
  }

  const removeBookmarkedJobs = (inputJob: any) => {
    console.log("stateBookmarked", bookmarkedJobs)
    console.log("inputJobInRemove", inputJob)
    const removedResult = bookmarkedJobs.filter(
      (stateJob) => stateJob?.id !== inputJob?.id
    )
    setBookmarkedJobs(removedResult)
  }

  return (
    <BookmarkContext.Provider
      value={{ addBookmarkedJobs, removeBookmarkedJobs, bookmarkedJobs }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
