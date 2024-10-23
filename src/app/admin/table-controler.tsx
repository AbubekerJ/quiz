


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import UserTable from "./user-table"
import QuestionTable from "./question-table"


export function TableController() {
  return (
    <Tabs defaultValue="participant" className="w-full ">
      <TabsList className="grid w-[50%] grid-cols-2 bg-green-400 text-white ">
        <TabsTrigger value="question">Question</TabsTrigger>
        <TabsTrigger value="participant">Participant</TabsTrigger>
      </TabsList >
      <TabsContent value="question">
        
         <QuestionTable/>
      </TabsContent>
      <TabsContent value="participant">
      <UserTable/>
      </TabsContent>
    </Tabs>
  )
}
