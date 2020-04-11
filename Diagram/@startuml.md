@startuml
start
title PageMovieDetail
:แสดงรายชื่อหนัง รูป และรายละเอียดของหนังที่เลือก;
stop
@enduml

@startuml
hide footbox
title PageMovieDetail Sequence
actor user
user->web: ผู้ใช้เลือกหนังที่ต้องการ
web->api: GetMovieDetail<id>
api->db: ดึงข้อมูล
note right
Model MovieDetail{
    _id:string,
    Name:string,
    Description:string,
    ImageUrl:string
}
end note
db--> api:result = มีไอดีตรงกับหนังที่เลือกมา
api-->web:result = นำข้อมูลมาแสดง
@enduml

@startuml
start
title homeAulyboy
:แสดงรูปหนังและรายชื่อหนังใต้รูป;
stop
@enduml

@startuml
start
title homeAulyboy(search)
:ใส่ word เพื่อค้นหาหนังตามรายชื่อหนัง;
:ข้อมูลหนังที่ตรงตาม word ขึ้นมาแสดงทั้งหมด;
stop
@enduml

@startuml
start
title homeAulyboy(moviedetail)
:กดรูปหนัง;
partition ref {
    :PageMovieDetail;
}
stop
@enduml

@startuml
start
title homeAulyboy(profile)
:กด profile;
partition ref {
    :profile;
}
stop
@enduml

@startuml
hide footbox
actor User
participant "web" as A
participant "Api" as B
participant "database" as C
User -> A: เข้า web
A -> B: ดึงข้อมูลหนังมาแสดง <<get>>
B -> C: ดึงข้อมูล
C --> C: result
note right
Model MovieDetail
[{
    _id: string
    Name: string
    ImageUrl: string
}]
end note
C --> A: ส่งข้อมูลมาแสดง 
User -> A: search ค้นหาหนัง
A -> B:[นำ word มาค้นหาหนัง] get<word>
B -> C: ดึงข้อมูล
C --> C: result
note right
Model MovieDetail
[{
    _id: string
    Name: string
    ImageUrl: string

}]
end note
C --> A: ส่งข้อมูลมาแสดง 
@enduml

@startuml
title profile page
hide footbox

actor user
participant page as page
participant api as api
participant DB as db
user -> page: เปิดหน้า profile
page -> api: get-all-User
api -> db: ดึงข้อมูล
note right
Model user
[{
    Name: string,
    _id:string,
    ImageURL: string
}]
end note
db --> page: ข้อมูล user ทั้งหมด
@enduml