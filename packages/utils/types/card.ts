type Card = {
  id: string;              // Unique ID for your collection (UUID or slug)
  name: string;            // Card name
  set: string;             // Expansion set 
  type: string;            // Creature, Trainer, Spell, etc.
  rarity: string;          // Common, Uncommon, Rare, etc.
  quantity: number;        // How many you own
  foil?: boolean;          // Whether it's holographic/foil
  imageUrl?: string;       // Optional image
  notes?: string;          // Personal notes, condition, etc.
  tags?: string[];         // For searching
}