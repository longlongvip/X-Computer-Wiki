# Cmake

## 单个源文件
```
Demo
└── main.cpp
```
CmakeLists.txt
```
cmake_minimum_required (VERSION 3.0)
project (Demo)
# 版本号 1.0
set (Demo_VERSION_MAJOR 1)
set (Demo_VERSION_MINOR 0)

# 添加可执行文件
add_executable(Demo main.cpp)
```

## 同一目录，多个源文件
```
Demo
├── main.cpp
├── fun.h
└── fun.cpp
```
CmakeLists.txt
```
cmake_minimum_required (VERSION 3.0)
project (Demo)
# 版本号 1.0
set (Demo_VERSION_MAJOR 1)
set (Demo_VERSION_MINOR 0)
# 所有源文件
aux_source_directory(. DIR_SRCS)
# 添加可执行文件
add_executable(Demo ${DIR_SRCS})
```

## 多个目录，多个源文件
```
Demo
├── main.cpp
└── Fun
    ├── fun.h
    └── fun.cpp
```
CmakeLists.txt
```
cmake_minimum_required (VERSION 3.0)
project (Demo)
# 版本号 1.0
set (Demo_VERSION_MAJOR 1)
set (Demo_VERSION_MINOR 0)
# 所有源文件
aux_source_directory(. DIR_SRCS)
# 添加Fun目录
add_subdirectory(Fun)
# 指定生成目标 
add_executable(Demo main.cpp)
# 添加链接库
target_link_libraries(Demo fun)
```

## 多个目录，多个源文件，第三方依赖库
```
Demo
├── main.cpp
|—— Third
    |—— include
    |—— lib
└── Fun
    ├── fun.h
    └── fun.cpp
```
CmakeLists.txt
```
cmake_minimum_required (VERSION 3.0)

project(Demo)

add_definitions(-std=gnu++11)

set(EXECUTABLE_OUTPUT_PATH ${PROJECT_BINARY_DIR}/bin)

include_directories(${CMAKE_SOURCE_DIR}/ext/jsoncpp/include)
link_directories(${CMAKE_SOURCE_DIR}/ext/jsoncpp/lib)

aux_source_directory(src SRC)

add_executable(demon ${SRC})

target_link_libraries(demon kmsjsoncpp)
```