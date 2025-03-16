1. db.userProfiles.find({name: /qw/i })

2. db.userProfiles.find({country: "Ukraine" })

3. db.userProfiles.find({country: null })

4. db.userProfiles.find({
    $where:function(){
    return !this.name.startsWith("O");
    }
})

8. db.cars.aggregate([
    {$lookup:{
        from:"userProfiles",
        localField:"userId",
        foreignField:"userID",
        as: "userInfo"
    }}, {
        $unwind: {
          path: "$userInfo",
          preserveNullAndEmptyArrays: true
        }
      }, 
      {$lookup:{
        from:"carBrands",
        localField:"carBrandId",
        foreignField:"_id",
        as: "carInfo"
    }}, {
        $unwind: {
          path: "$carInfo",
          preserveNullAndEmptyArrays: true
        }
      },
    {$match: {
        "mileage":{$gt:100},
        "carInfo.title":'Audi'
    }
}   
])      
 
9. db.cars.aggregate([
    {$lookup:{
        from:"carBrands",
        localField:"carBrandId",
        foreignField:"_id",
        as: "carGeneralInfo"
    }},
    {$match: { "carGeneralInfo.title": {$in: ['Audi', 'BMW']}} }
])