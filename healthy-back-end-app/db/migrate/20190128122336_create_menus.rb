class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.references :restaurant, foreign_key: true 
      t.string :dish_item
      t.float :price
      t.float :calories
      t.string :img
      t.string :description 
      

      
      


      t.timestamps
    end
  end
end
