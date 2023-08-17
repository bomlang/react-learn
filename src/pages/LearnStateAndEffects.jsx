import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

function LearnStateAndEffects() {


  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(null)
  
  useEffect(()=>{

    setIsLoading(true);
    
    async function fetchTodos(){

      const response = await fetch(
        'http://127.0.0.1:8090/api/collections/todos/records?page=1&perPage=2'
      )

      if(!response.ok){
        console.log(error);
      }
      const data = await response.json();
      console.log( data );

    }



    fetchTodos()

  },[])
  

  if(isLoading){
    return (
        <Spinner size={120}
        className="absolute z-[10000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    )
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className="text-indigo-600 font-suit text-2xl">
        상태 및 이펙트 학습하기
      </h2>
    </div>
  );
}

export default LearnStateAndEffects;