
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, X } from 'lucide-react';
import { useTranslations } from "next-intl";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const t = useTranslations('Navigation');
  const router = useRouter();

  const handleClear = () => {
    setTagName("");
    router.replace(`/`);
    router.refresh();
  };

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/product?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}
    >
      <Label htmlFor="product-name" className="text-right">
        
      </Label>
      <div className="flex gap-2 w-full justify-between">
        <div className="relative flex items-center flex-grow">
        <Input
          placeholder={t('search-input')}
          className="text-gray-800 border-gray-400"
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="product-name"
          value={tagName}
        />
        {tagName && (
          <X
            size={20}
            className="absolute right-2 cursor-pointer text-gray-400"
            onClick={handleClear}
          />
        )}
        </div>
        <Button type="submit"><Search size={20}/></Button>
        
      </div>
    </form>
  );
}
