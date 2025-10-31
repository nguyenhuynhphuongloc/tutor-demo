import type { CustomComponent, FieldClientComponent } from 'payload';
import { SelectInput } from '@payloadcms/ui/fields/Select';
import { useField } from '@payloadcms/ui/forms/useField';
import * as React from 'react';

export const CustomSelectComponent: CustomComponent = ({ path }) => {
  const { value, setValue } = useField<string>({  });
  const [options, setOptions] = React.useState<{ label: string; value: string }[]>([]);

  React.useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const countryOptions = data
          .map((country: any) => ({
            label: `${country.name.common} ${country.flag}`,
            value: country.name.common,
          }))
          .sort((a: any, b: any) => a.label.localeCompare(b.label));

        setOptions(countryOptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <div>
      <label className="field-label">Custom Select</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={(e: any) => setValue(e.value)}
      />
    </div>
  );
};
