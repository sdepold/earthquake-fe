import "@ebay/skin/floating-label";
import "@ebay/skin/select";
import { EbaySelect, EbaySelectOption } from "@ebay/ui-core-react/ebay-select";
import { Continent } from "../../models/continent";

export type RegionSelectorProps = {
  regions: Continent[];
  onChange: (value: string) => void;
};

export function RegionSelector({ regions, onChange }: RegionSelectorProps) {
  return (
    <EbaySelect
      name="formSelect"
      onChange={(evt, data: any) => onChange(data.selected[0])}
    >
      {regions.map((region) => (
        <EbaySelectOption key={region.slug} value={region.slug}>
          {region.name}
        </EbaySelectOption>
      ))}
    </EbaySelect>
  );
}
