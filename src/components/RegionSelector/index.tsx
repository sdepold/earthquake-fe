import "@ebay/skin/floating-label";
import "@ebay/skin/select";
import { EbaySelect, EbaySelectOption } from "@ebay/ui-core-react/ebay-select";
import { Continent } from "../../models/continent";

export type RegionSelectorProps = {
  regions: Continent[];
  onChange: (value: string) => void;
  value: string | null;
};

export function RegionSelector({
  regions,
  onChange,
  value,
}: RegionSelectorProps) {
  return (
    <EbaySelect
      name="formSelect"
      onChange={(evt, data: any) => onChange(data.selected[0])}
      value={value || undefined}
    >
      {regions.map((region) => (
        <EbaySelectOption key={region.slug} value={region.slug}>
          {region.name}
        </EbaySelectOption>
      ))}
    </EbaySelect>
  );
}
