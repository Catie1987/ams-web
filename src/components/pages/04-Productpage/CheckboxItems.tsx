import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {Checkbox} from '../../../components/ui/checkbox'; // Adjust import path as needed

interface CheckboxItemProps {
  name: string;
  value: string;
  label: string;
  onChange: (selectedItems: string[]) => void;
}

const CheckboxItems: FC<CheckboxItemProps> = ({ name, value, label, onChange }) => {
  const { control } = useFormContext();

  return (
    <li className='w-full text-black/60 flex'>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const values = field.value || [];
          
          // Function to handle change and log the value
          const handleChange = (checked: boolean | string) => {
            if (typeof checked === 'boolean') {
            const newValues = checked
              ? [...values, value]
              : values.filter((v: string) => v !== value);
           //console.log('Checked values:', newValues.length);
            field.onChange(newValues);
            onChange(newValues);
          };
        }
          return (
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={values.includes(value)}
                onCheckedChange={(checked) => handleChange(checked)}
              />
              <span className='text-base text-black/80'>{label}</span>
            </div>
          );
        }}
      />
    </li>
  );
};

export default CheckboxItems;
