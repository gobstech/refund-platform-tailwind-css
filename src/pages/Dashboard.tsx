import { useState } from "react";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Exemplo",
  category: "Transporte",
  amount: 34.5,
  categoryImg: CATEGORIES["transports"].icon
}

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  function fetchRefund(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1
      } 

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1
      }

      return prevPage;
    });
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form 
        onSubmit={fetchRefund}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-3 mt-6"
      >
        <Input 
          placeholder="Pesquisar pelo nome" 
          onChange={(e) => setName(e.target.value)} 
        />

        <Button
          className=""
          variant="icon"
          type="submit"
        >
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="my-6 flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {
          refunds.map((item) => (
            <RefundItem
              key={item.id}
              data={item}
              href={`/refund/${item.id}`}
            />
          ))
        }
        
      </div>

      <Pagination 
        current={page}
        total={totalOfPage}  
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}