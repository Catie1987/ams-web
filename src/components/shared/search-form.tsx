
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { Search, PencilLine, X } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Input } from "../ui/input";

export function SearchForm({ placeholder }: { placeholder: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations('Navigation');
  const { push } = useRouter();

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleSearch = () => {
    if (searchQuery) {
      push(`/product?query=${searchQuery}`);
    }
  };

  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex gap-2 w-full justify-between">
        <div className="relative flex items-center flex-grow">
        <Input
          className="peer block w-full rounded-md border border-white py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <PencilLine className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        {placeholder && (
          <X
            size={20}
            className="absolute right-2 cursor-pointer text-gray-400 hover:text-[--cta2]"
            onClick={handleClear}
          />
        )}
        </div>
        <Button onClick={handleSearch}><Search size={20}/></Button>
        
      </div>
    </div>
  );
}
