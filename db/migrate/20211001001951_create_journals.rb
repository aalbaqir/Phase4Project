class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.string :entry
      t.belongs_to :user

      t.timestamps
    end
  end
end
